// use 'type' for application, use 'interface' for library
type GreetProps = {
  name: string;
  messageCount?: number;
  isLogIn: boolean;
};

function Greet(props: GreetProps) {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLogIn
        ? `Welcome ${props.name}! Unread ${messageCount} message!`
        : `Welcome Guest!`}
    </div>
  );
}

export default Greet;
