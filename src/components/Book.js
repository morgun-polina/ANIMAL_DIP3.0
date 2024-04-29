// import React, { useState } from 'react';

// const Book = ({ onClose }) => {
//   const [chapter, setChapter] = useState(null);

//   const handleChapterClick = (chapter) => {
//     setChapter(chapter);
//   };

//   return (
//     <div className="book" onClick={onClose}>
//       {chapter === null && (
//         <div className="book-cover">
      
//           <h3>Красная книга</h3>
//         </div>
//       )}
//       {chapter !== null && (
//         <div className="chapter">
//           {/* Здесь разместите содержимое главы */}
//           <h3>Глава {chapter}</h3>
//           {/* Добавьте содержимое каждой главы */}
//         </div>
//       )}
//       <div className="bookmarks">
//         {/* Здесь разместите закладки для каждой главы */}
//         <div onClick={() => handleChapterClick(1)}>Глава 1</div>
//         <div onClick={() => handleChapterClick(2)}>Глава 2</div>
//         {/* Добавьте закладки для остальных глав */}
//       </div>
//     </div>
//   );
// };

// export default Book;
