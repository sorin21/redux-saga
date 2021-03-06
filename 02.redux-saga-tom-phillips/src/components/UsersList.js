import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

const UsersList = props => {
  console.log("props", props);
  return (
    <ListGroup>
      Hi
      {props.users
        .sort((a, b) => {
          if (a.firstName > b.firstName) {
            return 1;
          } else if (a.firstName < b.firstName) {
            return -1;
            // if for first if an 2nd if, the first name are the same, we have to check
            // after the lastName
          } else if (a.lastName > b.lastName) {
            return 1;
          } else if (a.lastName < b.lastName) {
            return -1;
          } else {
            return 0;
          }
        })
        .map(user => {
          console.log("user", user);
          return (
            <ListGroupItem key={user.id}>
              <section style={{ display: "flex" }}>
                <div style={{ flexGrow: 1, margin: "auto 0" }}>
                  {user.firstName}
                </div>
                <div>
                  <Button
                    outline
                    color="danger"
                    onClick={props.onDeleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </div>
              </section>
            </ListGroupItem>
          );
        })}
    </ListGroup>
  );
};

export default UsersList;
