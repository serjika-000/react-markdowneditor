import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { MarkDown } from './components/Markdown';
import { Menu } from './components/Menu';


function App(props) {

  const [active, setActive] = useState(true);
  const [toggle, setToggle] = useState(true);

  const data = [
    {
      "createdAt": "05-31-2024",
      "name": "untitled-document.md",
      "content": ""
    },
    {
      "createdAt": "05-31-2024",
      "name": "welcome.md",
      "content": "# Welcome to Markdown\n\nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.\n\n## How to use this?\n\n1. Write markdown in the markdown editor window\n2. See the rendered markdown in the preview window\n\n### Features\n\n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists\n- Name and save the document to access again later\n- Choose between Light or Dark mode depending on your preference\n\n> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).\n\n#### Headings\n\nTo create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n##### Lists\n\nYou can see examples of ordered and unordered lists above.\n\n###### Code Blocks\n\nThis markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this:\n\n```\n<main>\n  <h1>This is a larger code block</h1>\n</main>\n```"
    }
  ]
  
  

  const [newDocument, setNewDocument] = useState(data);
  const [selectedDocument, setSelectedDocument] = useState(data[1]);

  const [editedContent, setEditedContent] = useState(selectedDocument.content);



  const [theme, setTheme] = useState("Dark");


  const setDarkMode = () => {
    document.querySelector('body').setAttribute("class", "dark");
  }

  const setLightMode = () => {
    document.querySelector('body').setAttribute("class", "light");
  }


  const toggleTheme = () => {
    setToggle(!toggle);
    if (theme === "Light") {
      setTheme("Dark");
      setLightMode();
    } else {
      setTheme("Light");
      setDarkMode();
    }

  }

  const handleMenu = () => {
    setActive(!active)
  }

  function getFormattedDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();

    return `${day}-${month}-${year}`;
}

const handleDeleteDocument = (index) => {
  const updatedDocuments = [...newDocument];
  const deletedDocument = updatedDocuments.splice(index, 1)[0]; 
  setNewDocument(updatedDocuments);

 
  localStorage.setItem('data', JSON.stringify(updatedDocuments));


  if (deletedDocument === selectedDocument) {
    setSelectedDocument(null);
  }
}


const handleNewDocument = () => {
  const formattedDate = getFormattedDate();

  const newObj = {
    createdAt: formattedDate,
    name: 'untitled-document.md',
    content: "# Untitled\n\n### Welcome to the Live Preview Markdown Editor"
  };

  setNewDocument([newObj, ...newDocument]);

 
  localStorage.setItem('data', JSON.stringify([newObj, ...newDocument]));
}



useEffect(() => {
  const storedData = JSON.parse(localStorage.getItem('data'));
  if (storedData) {
    setNewDocument(storedData);
  }
}, []);


const getEditedContent = (content) => {
  setSelectedDocument((prev) => ({
    ...prev,
    content: content, 
  }));
};


  return (
    <div className='app-container flex justify-center'>
      <div className='app-content w-full flex flex-col h-screen'>
        {active ? "" : <Menu  toggle={toggle}
    toggleTheme={toggleTheme}
    setSelectedDocument={setSelectedDocument}
    handleNewDocument={handleNewDocument}
    handleDeleteDocument={handleDeleteDocument}
    newDocument={newDocument}
    setNewDocument={setNewDocument}/>}

<Navbar
  active={active}
  handleMenu={handleMenu}
  selectedDocument={selectedDocument}
  onContentChange={getEditedContent} 
/>
<MarkDown
  active={active}
  selectedDocument={selectedDocument}
  getEditedContent={getEditedContent}
/>

      </div>
    </div>
  )
}

export default App