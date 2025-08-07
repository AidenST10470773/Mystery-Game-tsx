import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, StatusBar } from 'react-native';

// The main App component for the Mystery Number Challenge game.
export default function App() {
  // State variables for the game
  const [secretNumber, setSecretNumber] = useState(0); // The random number to be guessed
  const [userGuess, setUserGuess] = useState(''); // The user's input
  const [message, setMessage] = useState('Guess a number between 1 and 10.'); // Feedback message to the user
  const [guesses, setGuesses] = useState(0); // Counter for the number of guesses
  const [isGameOver, setIsGameOver] = useState(false); // Flag to check if the game has ended

  // useEffect hook to initialize the game when the component mounts.
  useEffect(() => {
    resetGame();
  }, []);

  // Function to generate a new random number and reset the game state.
  const generateSecretNumber = () => {
    // Generate a random integer between 1 and 10 (inclusive).
    const newSecret = Math.floor(Math.random() * 10) + 1;
    setSecretNumber(newSecret);
  };

  // Function to reset all game-related state variables.
  const resetGame = () => {
    generateSecretNumber(); // Get a new secret number
    setUserGuess(''); // Clear the input field
    setMessage('Guess a number between 1 and 10.'); // Reset the message
    setGuesses(0); // Reset the guess count
    setIsGameOver(false); // Set game over flag to false
  };

  // Function to handle the user's guess submission.
  const handleGuess = () => {
    const guess = parseInt(userGuess, 10);

    // Check if the input is a valid number.
    if (isNaN(guess)) {
      Alert.alert('Invalid Input', 'Please enter a valid number.');
      return;
    }

    // Check if the user wants to quit.
    if (guess === -1) {
      setMessage(`You quit the game. The secret number was ${secretNumber}.`);
      setIsGameOver(true);
      return;
    }

    // Increment the number of guesses.
    setGuesses(prevGuesses => prevGuesses + 1);

    // Game logic based on the user's guess.
    if (guess === secretNumber) {
      setMessage(`Congratulations! You guessed the correct number! It took you ${guesses + 1} guesses.`);
      setIsGameOver(true);
    } else if (guess > secretNumber) {
      setMessage('Too high! Try again.');
    } else {
      setMessage('Too low! Try again.');
    }
    
    // Clear the input field for the next guess.
    setUserGuess('');
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.card}>
        <Text style={styles.title}>Mystery Number Challenge</Text>
        <Text style={styles.message}>{message}</Text>

        {!isGameOver ? (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={userGuess}
              onChangeText={setUserGuess}
              placeholder="Enter your guess (1-10)"
              placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.button} onPress={handleGuess}>
              <Text style={styles.buttonText}>Submit Guess</Text>
            </TouchableOpacity>
            <Text style={styles.quitText}>(Enter -1 to quit)</Text>
          </View>
        ) : (
          <View style={styles.gameOverContainer}>
            <TouchableOpacity style={styles.playAgainButton} onPress={resetGame}>
              <Text style={styles.buttonText}>Play Again?</Text>
            </TouchableOpacity>
            <Text style={styles.guessesText}>Total Guesses: {guesses}</Text>
          </View>
        )}
        
        {!isGameOver && (
          <Text style={styles.guessesText}>Guesses: {guesses}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 30,
    width: '90%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#555',
  },
  inputContainer: {
    alignItems: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
    width: '100%',
    color: '#333',
  },
  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '100%',
    marginBottom: 10,
  },
  playAgainButton: {
    backgroundColor: '#50e3c2',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '100%',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  quitText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
  guessesText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
  gameOverContainer: {
    alignItems: 'center',
  }
});
