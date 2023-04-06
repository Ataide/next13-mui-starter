import { Suspense } from "react";
import ClientComponent from "../../components/clientComponent";
import { ServerComponent } from "../../components/serverComponent";

export default function Page() {

  return (
    <>
      {/* @ts-expect-error */}
      <ServerComponent />
   
    </>
  )
}