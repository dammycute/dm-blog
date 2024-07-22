// import React, { useState } from 'react';
// // import { global } from 'fbjs';
// import * as fbjs from 'fbjs';
// // const global = fbjs.global;
// import { global as fbjsGlobal } from 'fbjs';
// import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';

// // const global = window;

// const MyEditor = () => {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty());

//   const handleBoldClick = () => {
//     setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
//   };

//   return (
//     <div>
//       <Editor editorState={editorState} onChange={setEditorState} />
//       <button onClick={handleBoldClick}>Bold</button>
//       <button onClick={() => console.log(convertToRaw(editorState.getCurrentContent()))}>
//         Log Content
//       </button>
//     </div>
//   );
// };

// export default MyEditor;