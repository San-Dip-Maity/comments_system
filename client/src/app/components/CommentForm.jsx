import React from "react";
import { Paper, TextField, Button, Box } from "@mui/material";
import {
  Send,
  Comment,
} from "@mui/icons-material";

export const CommentForm = ({ comment, setComment, onSubmit }) => (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <Comment color="primary" />
        <h2 style={{ margin: 0 }}>Add Comment</h2>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          multiline
          rows={3}
          label="Your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={onSubmit}
          disabled={!comment.trim()}
          endIcon={<Send />}
          sx={{ alignSelf: 'flex-end' }}
        >
          Post Comment
        </Button>
      </Box>
    </Paper>
  );