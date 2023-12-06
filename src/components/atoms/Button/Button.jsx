function Button(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={props.className}
      id={props.id}
    >
      {props.text}
    </button>
  );
}

export default Button;
