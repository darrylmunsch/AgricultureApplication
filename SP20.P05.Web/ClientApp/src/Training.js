import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

class UserListingPage extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    // Never do this.state to mutate state
    this.loadingNumber = setTimeout(() => {
      this.onFinishLoad();
      this.setState({ users: [{ name: "foo" }] });
    }, 1000);
  }
  /*
  useEffect is better than componentDidMount
   */

  // clear timeout on unmount so that we don't get memory leaks
  componentWillUnmount() {
    clearTimeout(this.loadingNumber);
  }

  render() {
    if (this.state.users.length < 1) {
      return "Loading...";
    }
    return (
      <h1>
        Listing page for users
        <ol>
          {this.state.users.map(x => (
            <li key={x.id}>users</li>
          ))}
        </ol>
      </h1>
    );
  }

  onFinishLoad = () => {
    this.setState({ users: [{ user: "foo" }] });
  };
}

function UserListingPage1({ targetId }) {
  let { userId } = useParams();
  const [users, setUsers] = useState([]);

  //
  useEffect(() => {
    setUsers([]);
    const cleanup = setTimeout(() => {
      if (!userId) {
        setUsers([{ name: "bob", id: 1234 }]);
      } else setUsers([{ name: "Bob" + userId, id: userId }]);
    }, Math.random() * 1000 + 100);
    // Needed to fix latency
    return () => clearTimeout(cleanup);
  }, [userId]);
  if (users.length < 1) {
    return "Loading...";
  }

  return (
    <h1>
      Listing page for users
      <ol>
        {this.state.users.map(x => (
          <li key={x.id}>users</li>
        ))}
      </ol>
    </h1>
  );
}
