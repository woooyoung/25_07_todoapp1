'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material';
import { MdDeleteForever } from 'react-icons/md';
import theme from './theme';

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="flex items-center gap-x-3">
          <Button variant="text">Text</Button>
          <Button
            variant="contained"
            onClick={() => {
              confirm('삭제할거임?');
            }}>
            <MdDeleteForever />
            삭제
          </Button>
          <Button variant="outlined">
            <MdDeleteForever />
            Outlined
          </Button>
        </div>
      </ThemeProvider>
      <div className="flex items-center gap-x-3">
        <Button
          variant="text"
          onClick={() => {
            alert('버튼 클릭 됨');
          }}>
          Text
        </Button>
        <Button variant="contained" disabled>
          Contained
        </Button>
        <Button variant="outlined" href="sub/">
          sub로 이동
        </Button>
      </div>
    </>
  );
}
