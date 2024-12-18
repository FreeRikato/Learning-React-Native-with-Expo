import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import { useState } from "react";

interface Todos {
  title: string;
  description: string;
  id: string;
}

export default function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState<Todos[]>([]);

  const AddTodos = () => {
    setTodos([
      ...todos,
      {
        title: title,
        description: description,
        id: Date.now().toString(),
      },
    ]);
    setTitle("");
    setDescription("");
  };

  const removeItem = (id: string) => {
    const todosAfterFilter = todos.filter((todo) => todo.id !== id);
    setTodos(todosAfterFilter);
  };

  const renderItem = (item: Todos) => {
    return (
      <View>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
        <Pressable
          style={{ backgroundColor: "#FB9EC6", padding: 2 }}
          onPress={() => removeItem(item.id)}
        >
          <Text>Remove</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      />
      <Text style={{ fontSize: 20 }}>Todo Application</Text>
      <TextInput
        style={{
          backgroundColor: "#F8FAFC",
          width: 200,
          padding: 2,
          borderWidth: 1,
          margin: 2,
        }}
        placeholder="Enter title"
        placeholderTextColor={"#9AA6B2"}
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <TextInput
        style={{
          backgroundColor: "#F8FAFC",
          width: 200,
          padding: 2,
          borderWidth: 1,
          margin: 2,
        }}
        placeholder="Enter description"
        placeholderTextColor={"#9AA6B2"}
        onChangeText={(text) => setDescription(text)}
        value={description}
      />
      <Pressable
        style={{
          backgroundColor: "#CDC1FF",
          padding: 2,
          margin: 2,
          borderWidth: 0.5,
        }}
        onPress={() => AddTodos()}
      >
        <Text>Submit</Text>
      </Pressable>
      <FlatList
        data={todos}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id}
      />
      <Text>{JSON.stringify(todos)}</Text>
    </View>
  );
}
