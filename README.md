# Mystery Number Challenge

[Aiden Munsamy]
[st10470773]
ICE TASK "

-----

## Links

  - **GitHub Repository**: https://github.com/AidenST10470773/Mystery-Game-tsx.git

-----

## Project Overview

The **Mystery Number Challenge** is a mobile application developed using **React Native** and **TypeScript**. The app challenges users to guess a randomly generated number between 1 and 10. The user receives feedback after each guess, indicating whether their guess was "too high" or "too low." The game tracks the number of guesses and ends when the correct number is found. It includes options to play again or end the game, providing a simple yet engaging user experience. The app uses `useState` hooks for state management and basic components like `TextInput` and `TouchableOpacity` to create a clean and functional interface.

-----

## Purpose and Features

### Purpose:

The **Mystery Number Challenge** aims to provide a simple and fun number guessing game for users. It is designed to be a straightforward application that demonstrates key **React Native** and **TypeScript** concepts, such as state management, user input handling, and conditional rendering, in a practical context.

### Key Features:

  - **Random Number Generation**:

      - **Description**: The app generates a new random "secret" number between 1 and 10 at the start of each game.
      - **Functionality**: The `generateSecretNumber` function uses `Math.random()` to create a new secret number, which is then stored in state.

  - **Interactive Guessing**:

      - **Description**: Users can enter their guess into a text field and submit it with a button press.
      - **Functionality**: The app captures user input using `TextInput`, and the `handleGuess` function processes the guess to determine if it is correct, too high, or too low.

  - **Dynamic Feedback**:

      - **Description**: The app provides immediate feedback to guide the user's next guess.
      - **Functionality**: The `message` state is updated with text like "Too high\!", "Too low\!", or a congratulatory message when the correct number is guessed.

  - **Game State Management**:

      - **Description**: The game tracks the number of guesses the user has made and whether the game is over.
      - **Functionality**: `guesses` and `isGameOver` states are updated throughout the game, controlling which UI elements are displayed to the user.

  - **Game Controls**:

      - **Description**: Users have the option to reset the game to play again or end the game entirely.
      - **Functionality**: The `resetGame` function reinitializes all states, including the secret number. The `endGame` function clears the game states to provide a final "Thank you" message. Users can also enter `-1` at any time to quit.

-----

## Design Considerations

The design of the **Mystery Number Challenge** was based on the following key considerations:

  - **User Experience (UX)**: The app was designed to be intuitive and easy to use. The primary actions (entering a guess and submitting) are clearly visible and accessible. The feedback messages are prominent to guide the user effectively.

  - **Simplicity**: The user interface is minimalistic, focusing on the core game loop without unnecessary visual clutter. The use of a centered card layout makes the game the primary focus.

  - **Functionality**: The app's design directly supports its purpose by ensuring that the game's flow, from guessing to receiving feedback and restarting, is logical and responsive.

-----

## App screenshots
<img width="386" height="774" alt="Screenshot 2025-08-07 212605" src="https://github.com/user-attachments/assets/64341e03-faeb-484d-b96d-9aa988f895ff" />
<img width="400" height="737" alt="Screenshot 2025-08-07 212615" src="https://github.com/user-attachments/assets/613a47b8-21e4-484d-a52e-74966a7dac66" />
<img width="1906" height="915" alt="Screenshot 2025-08-07 212527" src="https://github.com/user-attachments/assets/bd543541-6a67-4baa-abde-27d0ca9d163b" />



-----

## Challenges and Learnings

During the development of the Mystery Number Challenge, several key challenges and learnings emerged:

### Challenge 1: State Management

  - **Issue**: Managing the various states of the game, such as the secret number, the user's guess, the feedback message, and the number of guesses, required a structured approach.
  - **Solution**: I utilized **React's `useState` hook** to declare and update each piece of state. This approach allowed the UI to automatically re-render whenever a state variable changed, ensuring a responsive user experience without manual DOM manipulation.

### Challenge 2: Handling User Input

  - **Issue**: Properly capturing and validating numerical input from a text field.
  - **Solution**: I used the `TextInput` component with `keyboardType="numeric"` to restrict the on-screen keyboard. The `onChangeText` prop was used to update the `userGuess` state in real-time, and the `parseInt` function was used to convert the input string to an integer for comparison in the `handleGuess` function.

### Challenge 3: Conditional Rendering

  - **Issue**: Displaying different parts of the UI based on the game's state (e.g., showing the input field versus the "Play Again" button).
  - **Solution**: I implemented **conditional rendering** by using a ternary operator (`isGameOver ? ... : ...`) in the JSX. This allowed the component to display the appropriate UI elements depending on whether the game had ended, providing a clear and logical flow for the user.

**From these challenges, I learned the importance of:**

  - **Component-based architecture** and the role of hooks like `useState` in building reactive applications.
  - **Input validation** to prevent errors from invalid user data.
  - **Conditional logic** in rendering to create dynamic and state-aware user interfaces.

-----

## Future Enhancements

While the current version of the Mystery Number Challenge provides a complete gameplay loop, there are several features that could be added in the future:

  - **Difficulty Levels**: Allow users to choose a wider range of numbers (e.g., 1-100) to increase the difficulty.
  - **High Scores**: Implement a feature to track and display the user's best scores (fewest guesses) across multiple games.
  - **User Interface Enhancements**: Add animations, sound effects, and a more polished design to make the game more engaging.
  - **Input History**: Display a history of the user's previous guesses to help them narrow down the correct number.

-----

## References

  - [React Native Documentation](https://reactnative.dev/docs/getting-started)
  - [TypeScript Documentation](https://www.typescriptlang.org/docs/)
