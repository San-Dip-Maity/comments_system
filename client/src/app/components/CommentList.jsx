import React from "react";
import { Paper, List, ListItem, Box, Typography, Avatar } from "@mui/material";
import { Comment, AccountCircle } from "@mui/icons-material";

export const CommentList = ({ comments }) => (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <Comment color="primary" />
        <h2 style={{ margin: 0 }}>Comments</h2>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {comments.map((comment) => (
          <Paper key={comment.id} sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <AccountCircle color="primary" />
              <strong>{comment.username}</strong>
            </Box>
            <Box sx={{ ml: 4, mb: 1 }}>{comment.comment}</Box>
            <Box sx={{ ml: 4, color: 'gray', fontSize: '0.9em' }}>
              {new Date(comment.timestamp).toLocaleString()}
            </Box>
          </Paper>
        ))}
      </Box>
    </Paper>
  );
  
