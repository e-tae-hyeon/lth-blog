"use client";

import React, { Suspense } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

type Props = React.PropsWithChildren<{}>;

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <section className="flex justify-center items-center p-[20px] h4">
      <h1>에러가 발생했어요... 나중에 방문해주세요</h1>
    </section>
  );
}

function AsyncBoundary({ children }: Props) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense>{children}</Suspense>
    </ErrorBoundary>
  );
}

export default AsyncBoundary;
