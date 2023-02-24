import Navbar from "./Navbar";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Routing from "./Routing";
import React, { useState } from "react";
import { MyContext, DrawerContext } from "./Context";

const allTodoData = [
  { id: 0, title: "myTodo", description: "hello i am todo description" }
];
let nextId = 1;
export default function App() {
  const [allData, setAllData] = useState(allTodoData);

  function showTodo(mytitle, mydesc) {
    setAllData([
      ...allData,
      {
        id: nextId++,
        title: mytitle,
        description: mydesc
      }
    ]);
  }
  function deleteTodo(item) {
    setAllData(allData.filter((oldItem) => oldItem.id !== item));
  }

  function editTodo(NewTitle) {
    setAllData(
      allData.map((item) => {
        if (item.id === NewTitle.id) {
          return NewTitle;
        } else {
          return item;
        }
      })
    );
  }
  return (
    <>
      <MyContext.Provider value={allData} DrawerContext={DrawerContext}>
        {/* {console.log(allData)} */}

        <Box sx={{ display: "flex" }}>
          <Navbar />
          <CssBaseline />
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 1.5 }}
          >
            <Toolbar />
            <Routing
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              displayTodo={showTodo}
            />
          </Box>
        </Box>
      </MyContext.Provider>
    </>
  );
}
