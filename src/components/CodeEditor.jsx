import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { aura } from '@uiw/codemirror-theme-aura';
import { autocompletion } from "@codemirror/autocomplete";
import { html } from '@codemirror/lang-html';

function CodeEditor({ fileName, fileContent, onFileChange }) {

  return (
    <div>
      <h2 className='bg-[#1b1b26] text-white pl-2 font-bold'>{fileName}</h2>
      <div className='max-h-[50vh]'>
        <CodeMirror
          value={fileContent}
          extensions={[javascript({ jsx: true }), autocompletion(), html()]}
          theme={aura}
          height='300px'
          onChange={(value) => onFileChange(fileName, value)}
        />
      </div>
    </div>
  );
}
export default CodeEditor;
