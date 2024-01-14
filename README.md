# Web App Assignment Overview

## Technologies Used
- **React**: Leveraged due to a strong foundation and practice.
- **CSS**: Utilized for styling; opted for custom CSS instead of Material-UI (Mui) as I am still a beginner in Mui.
- **ViteJS**: Chosen for its ease of use and my familiarity with it.

## Project Structure

### Components
1. **App**: The default component.
2. **Themewrapper**: Wraps the entire web app to enable the use of the Theme context. It includes a menu for theme management and two associated states.
3. **Layout**: Contains the components Notify, HeaderCont, InputOutputCont. Notify wraps Header and InputOutputCont.
4. **Notify**: Builds the notification UI with a simple, classy, and decent appear-and-disappear animation. Has two associated states.
5. **InputOutputCont**: The main container containing Input.jsx and Output.jsx. Sends four prop values to these components.
6. **Input**: Allows the user to select Word, Para section options and input values for processing.
7. **Output**: Displays the result of fetch requests or processed paragraphs or words.

### Contexts
1. **Theme Context**: Manages the theme of the web app.
2. **NotifyMsg Context**: Accesses the notification message.
3. **SetNotifyMsg Context**: Sets the notification message.

## State Management
- Three contexts are employed for effective state management.

## Features Added
1. **Notification Feature**: Implemented a notification system.
2. **Responsiveness**: Ensured the web app is responsive.
3. **Error Handling**: Implemented error handling for a seamless user experience.
4. **Theme Feature**: Incorporated a theme management system.
5. **Table Loaders**: Added loaders for enhanced user experience.
6. **Word Property Loader**: Implemented loaders for word properties.

## Data Processing
### Word Input
- Utilized the `split` method to obtain character and word counts.
- Employed the `fetch` method to obtain responses from WordsAPI and sent them to the Output component using `handleglobalwordprop`.

### Paragraph Input
- Used the `split` method to count characters (including symbols) and spaces.
- Utilized `split` with a regex pattern (`/[_.:});,!?"'{(-]/`) to count punctuations.

### Word, Sentence, Paragraph Count
- Employed a loop to iterate through characters and checked each character against the regex pattern.
- Ensured accuracy and dynamic counting based on the characters entered by the user.

## Styling
- Utilized regular CSS for styling, avoiding external libraries.

This assignment not only fulfills the basic requirements but also includes additional features and enhancements to elevate the overall look and functionality of the web app.
