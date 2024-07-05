const Notification = (props) => {
  const { url, name,className} = props;
  return (
    <div className={`notification ${className}`}>
      <img src={url} className="icon"/>
      <p className="para">{name}</p>
    </div>
  );
};

const element = () => (
  <div className="container">
    <h1 className="heading">Notifications</h1>
    <div>
      <Notification
        url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        name="Information Message" className="info"
      />
      <Notification
        url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        name="Success Message" className="success"
      />
      <Notification
        url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        name="Warning Message" className="warning"
      />
      <Notification
        url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        name="Error Message" className="error"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
