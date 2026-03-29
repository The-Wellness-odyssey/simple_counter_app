import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// This is the main component that displays the counter and handles user interactions
export default function App() {
  // useState stores the current counter value. It initializes at 0.
  const [count, setCount] = useState(0);

  // This function adds 1 to the counter
  const increment = () => {
    setCount(count + 1);
  };

  // This function subtracts 1 from the counter, but prevents it from going below 0
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // This function resets the counter back to 0
  const reset = () => {
    setCount(0);
  };

  return (
    // The main container View uses flexbox to center everything on the screen
    <View style={styles.container}>
      {/* Title of the App */}
      <Text style={styles.title}>My Counter App</Text>

      {/* The number showing the current count value */}
      <Text style={styles.counterText}>{count}</Text>

      {/* Conditional rendering: Shows a message if the counter reaches exactly 10 */}
      {count === 10 ? (
        <Text style={styles.milestoneText}>You reached 10!</Text>
      ) : null}

      {/* Conditional rendering: Shows a warning if the counter is at 0 */}
      {count === 0 ? (
        <Text style={styles.warningText}>Counter cannot go below 0.</Text>
      ) : null}

      {/* Container for the buttons to sit side-by-side */}
      <View style={styles.buttonContainer}>
        {/* Decrement Button */}
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>-1</Text>
        </TouchableOpacity>

        {/* Reset Button */}
        <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={reset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>

        {/* Increment Button */}
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>+1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// StyleSheet for basic layout and styling
const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up the whole screen
    backgroundColor: '#f5f5f5',
    alignItems: 'center', // Centers items horizontally
    justifyContent: 'center', // Centers items vertically
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  counterText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 20,
  },
  milestoneText: {
    fontSize: 18,
    color: '#4CAF50', // Green color for success
    fontWeight: 'bold',
    marginBottom: 20,
  },
  warningText: {
    fontSize: 16,
    color: '#F44336', // Red color for warning
    marginBottom: 20,
    fontStyle: 'italic',
  },
  buttonContainer: {
    flexDirection: 'row', // Aligns buttons in a row rather than a column
    justifyContent: 'space-between',
    width: '80%', // Takes up 80% of the screen width
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    elevation: 3, // Adds a slight shadow on Android
  },
  resetButton: {
    backgroundColor: '#9E9E9E', // Different color to distinguish the reset button
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});