const Dropdown = () => {
  return (
    <div className="top-18 absolute bg-gray-50 p-4">
      <ul>
        <li className="py-2 px-2 hover:bg-blue-700 hover:text-gray-100">
          Acerca de
        </li>
        <li className="py-2 px-2 hover:bg-blue-700 hover:text-gray-100">
          Historia
        </li>
        <li className="py-2 px-2 hover:bg-blue-700 hover:text-gray-100">
          Junta Directiva
        </li>
        <li className="py-2 px-2 hover:bg-blue-700 hover:text-gray-100">
          Organización Administrativa
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
