import "../global.css";
import React, { useState } from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";

// Types for Todo
interface Todo {
  title: string;
  description: string;
  id: string;
}

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todo, setTodo] = useState<Todo[]>([]);

  const AddTodos = () => {
    if (title.trim() === "" || description.trim() === "") {
      alert("Both title and description are required!");
      return;
    }

    const newTodo: Todo = {
      title: title,
      description: description,
      id: Date.now().toString(), // Generate unique id
    };
    setTodo((prevTodo) => [...prevTodo, newTodo]); // Add the new todo to the list
    setTitle("");
    setDescription("");
  };

  const RemoveTodo = (id: string) => {
    const todoRemoved = todo.filter((item) => item.id !== id);
    setTodo(todoRemoved);
  };

  const ClearTodos = () => {
    if (todo.length === 0) {
      alert("No todos to clear.");
      return;
    }
    setTodo([]);
  };

  const renderItem = ({ item }: { item: Todo }) => (
    <View className="p-4 border-b border-gray-300">
      <Text className="text-lg font-bold mb-1">{item.title}</Text>
      <Text className="text-gray-600">{item.description}</Text>
      <Pressable
        onPress={() => RemoveTodo(item.id)}
        className="bg-red-500 p-3 rounded mb-3 items-center"
      >
        <Text className="text-white font-bold">Remove Todo</Text>
      </Pressable>
    </View>
  );

  return (
    <View className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold mb-4 text-center">
        Todo Application
      </Text>

      <TextInput
        placeholder="Enter the Title"
        placeholderTextColor="#A0A0A0"
        value={title}
        onChangeText={(text) => setTitle(text)}
        className="mb-3 p-3 border border-gray-300 rounded bg-white"
      />

      <TextInput
        placeholder="Enter the Description"
        placeholderTextColor="#A0A0A0"
        value={description}
        onChangeText={(text) => setDescription(text)}
        className="mb-3 p-3 border border-gray-300 rounded bg-white"
      />

      <Pressable
        onPress={AddTodos}
        className="bg-blue-500 p-3 rounded mb-3 items-center"
      >
        <Text className="text-white font-bold">Add Todo</Text>
      </Pressable>

      <Pressable
        onPress={ClearTodos}
        className="bg-red-500 p-3 rounded items-center"
      >
        <Text className="text-white font-bold">Clear Todos</Text>
      </Pressable>

      <FlatList
        data={todo}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <Text className="text-gray-500 text-center mt-4">
            No Todos Available
          </Text>
        )}
        className="mt-4"
      />
    </View>
  );
};

export default App;
