import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faMarkdown, } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';
import { marked } from 'marked';

function HeaderBox({type}) {
    return (
        <>
            <div className={`header`}>
                <FontAwesomeIcon className="header-icon" icon={type === 'preview' ? faDesktop : faMarkdown} />
                <p>{type}</p>
            </div>
        </>
    )
}

function PreviewBox({pText}) {

    function convertMarked(mdText) {
        return (
            <>
                <div className='preview-content-html' dangerouslySetInnerHTML={{ __html: marked(mdText)}}>
                </div>
            </>
        )
    }
    return (
        <div className='preview-div'>
            <HeaderBox type='preview' />
            <div className="preview-content" id="preview">
                {convertMarked(pText)}
            </div>
        </div>
    )
}

function EditorBox({pText, setpText}) {

    return (
        <div className='editor-div'>
            <HeaderBox type='editor' />
            <textarea className="editor-textarea" id="editor" value={pText} onChange={e => {
                setpText(e.target.value)}}/>
        </div>
    )
}

export default function MDEditor() {
  
    let defaultText = "# I'm a header!\n\n## And I'm a sub-heading!\n\nHere's a [link](https://iruminii.github.io/quote-machine/), click me!\n\nInline code `<code></code>` and code blocks both use backticks!\n\nThough code blocks use three.\n```\n\t//I'm a code block\n\tfunction hello() {\n\t\treturn 'world';\n\t}\n```\n\nlike lists?\n- me\n\t- **too**\n\n\n\n> Know any good quotes to put here?\n\nHere's an image from another repo.\n![embedded image here](https://raw.githubusercontent.com/iruminii/tic-tac-toe/main/reacthumb.png)";
    
    const [pText, setpText] = useState(defaultText);
    
  return (
    <>
      <div className='page-container'>
        <EditorBox pText={pText} setpText={setpText}/>
        <PreviewBox pText={pText}/>
      </div>
    </>
  )
}