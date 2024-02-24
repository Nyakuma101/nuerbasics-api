import axios from "axios";
import React from "react";
import { useEffect } from "react";

function JsonServer() {
  useEffect(() => {
    axios.get("lhttp://localhost:${PORT}");
  });
}
