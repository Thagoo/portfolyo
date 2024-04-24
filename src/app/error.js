"use client";

import { useEffect } from "react";

export default function Error({ error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <h6 className="d-flex align-items-center justify-content-center min-vh-100">
        Something went wrong, please try after some time
      </h6>
    </main>
  );
}
