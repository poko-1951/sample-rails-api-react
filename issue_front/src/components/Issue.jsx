import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  Container,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  Input,
  ListItemSecondaryAction,
  Checkbox
  } from '@material-ui/core';

export const Todo = () => {
  const [createissue, setCreateissue] = useState("");
  const [issues, setIssues] = useState([]);

  const createIssue = (event) => {
    console.log("イベント発火")
    axios.post('http://localhost:3001/issues',
      {
        name: createissue
      }
    ).then(response => {
      console.log("registration response", response.data)
      setIssues([...issues, {
        id: response.data.id,
        name: response.data.name
      }])
      resetTextField()
    }).catch(error => {
      console.log("registration error", error)
    }).catch(data =>  {
      console.log(data)
    })
    event.preventDefault()
  }

  const resetTextField = () => {
    setCreateissue('')
  }

  return (
    <>
      <div>
        <input placeholder="TODOを入力"></input>
        <button>追加</button>
      </div>
      <div>
        <ul>
          <li>efaew</li>
          <button>編集</button>
        </ul>
      </div>
    </>
  );
};