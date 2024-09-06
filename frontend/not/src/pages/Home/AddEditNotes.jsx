import React from "react";

function AddEditNotes() {
  return (
    <div className="relative">
      <div className="flex flex-col gap-2">
        <label className="input-label">TITLE</label>
        <input
          type="text"
          className="text-2xl bg-black outline-none"
          placeholder="서울대 합격하기"
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">CONTENT</label>
        <textarea
          type="text"
          className="text-sm bg-zinc-900 outline-none p-2 rounded"
          placeholder="Content"
          rows={10}
        />
      </div>

      <div className="mt-3">
        <label className="input-label">TAGS</label>
      </div>

      <button
        className="btn-primary font-medium mt-5 p-3"
        onClick={() => {}}
      >
        ADD
      </button>
    </div>
  );
}
export default AddEditNotes;