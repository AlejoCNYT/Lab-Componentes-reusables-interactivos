function MyButton({ children, authorDescription }) {
  const handleClick = () => alert(authorDescription);
  return <button onClick={handleClick}>Información acerca de {children}</button>;
}
export default MyButton;
