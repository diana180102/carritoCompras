export default function OrderProduct({ name, cost}) {
  
   

  
  return (
    <div className="flex flex-row gap-2 text-lg font-normal text-gray-500 justify-between">
      <p>{name}</p>
      <p>${cost}</p>
    </div>
  );
}
