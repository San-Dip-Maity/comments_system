"use client"
import React, { useState, useEffect } from 'react';
import { Container, Box, ThemeProvider, CssBaseline } from '@mui/material';
import { LoginForm } from './components/LoginForm';
import { CommentForm } from './components/CommentForm';
import { CommentList } from './components/CommentList';
import { theme } from '../theme/theme';
import { api } from '../services/api';
import { initializeSocket } from '../services/socket';

export default function Comments() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Load existing comments
    const loadComments = async () => {
      const data = await api.getComments();
      setComments(data);
    };
    loadComments();

    // Setup real-time updates
    const socket = initializeSocket((newComment) => {
      setComments(prev => [...prev, newComment]);
    });

    return () => socket.disconnect();
  }, []);

  const handleLogin = async () => {
    try {
      const { sessionId } = await api.login(username);
      localStorage.setItem('sessionId', sessionId);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleSubmitComment = async () => {
    if (!comment.trim()) return;

    try {
      await api.postComment({
        username,
        comment,
        sessionId: localStorage.getItem('sessionId')
      });
      setComment('');
    } catch (error) {
      console.error('Failed to post comment:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 4, bgcolor: 'background.default', minHeight: '100vh' }}>
        <Box sx={{ maxWidth: 800, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 3 }}>
          {!isLoggedIn ? (
            <LoginForm
              username={username}
              setUsername={setUsername}
              onLogin={handleLogin}
            />
          ) : (
            <>
              <CommentForm
                comment={comment}
                setComment={setComment}
                onSubmit={handleSubmitComment}
              />
              <CommentList comments={comments} />
            </>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}