import React from "react";

const UserTable = ({ users, editRow, deleteUser }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.length > 0 ? (
        users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>

            <td>
              <button
                onClick={() => {
                  editRow(user);
                }}
                className="btn btn-secondary"
              >
                Edit
              </button>
              <button
                onClick={() => deleteUser(user.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr></tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
