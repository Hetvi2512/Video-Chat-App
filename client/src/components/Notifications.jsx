import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { SocketContext } from "../SocketContext";
function Notifications() {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  console.log(call, callAccepted);
  return (
    <>
      {call?.isReceivingCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {console.log("INSIDE")}
          <h1>{call.name} is calling</h1>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={answerCall}
          >
            Answer the call
          </Button>
        </div>
      )}
    </>
  );
}

export default Notifications;
