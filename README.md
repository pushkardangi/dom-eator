# DOMeator

DOMeator is a lightweight Chrome extension that allows you to temporarily delete elements from any webpage. The changes are non-destructive and revert upon refreshing the page, making it perfect for quick customizations and experiments.

## Features

- **Element Removal**: Enter element's id and click on delete id button.
- **Temporary Changes**: All modifications are session-based and reset on refresh.
- **User-Friendly**: Simple and intuitive interface for effortless DOM manipulation.

## Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode** using the toggle in the top-right corner.
4. Click **Load Unpacked** and select the project folder.
5. The DOMeator icon will appear in your Chrome toolbar, ready to use.

## Usage

1. Click on the DOMeator icon in the toolbar to open the popup.
2. Enter the element's id to remove it temporarily.
3. Press the **Delete Element** button.
4. Refresh the page to restore the original content.

## File Structure

```text
DOMeator/
├── background.js       # Background script (optional for future enhancements)
├── content.js          # Interact with content of the current webpage
├── manifest.json       # Extension metadata and permissions
├── popup.html          # User interface for the extension
├── popup.js            # Handles user interactions in the popup
```

## Roadmap

- Add support for undoing deletions without refreshing the page.
- Implement a history feature to track and manage deleted elements.
- Introduce customizable keyboard shortcuts for quicker actions.
- Add styling customization to visually highlight deletable elements.

## Contributing

Contributions are welcome! If you have ideas or feature requests, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify it for personal or commercial purposes.

---

Bring order to your DOM with DOMeator! 🚀
