export default function Choice({ text, onClick, selected }) {
  return (
    <div className="w-12 h-6 relative">
        <input type="checkbox" onChange={onClick} value={text} className="absolute top-5 left-0"  />
      <label className="">
        {text}
      </label>
    </div>
  );
}