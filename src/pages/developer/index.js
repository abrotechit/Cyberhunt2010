import React from "react";
import { useParams } from "react-router";
import PageFooter from "../../componentParts/footer";
import TopNav from "../../componentParts/topNav";
import ApiReferencePage from "./api-reference";
import DeveloperDocs from "./developer-docs";
import IntegrationsPage from "./integrations";

function DeveloperPage() {
  const { cat } = useParams();

  console.log(cat);
  const DisplayPage = () =>
    cat === "developer-docs" ? (
      <DeveloperDocs />
    ) : cat === "integration" ? (
      <IntegrationsPage />
    ) : cat === "api-reference" ? (
      <ApiReferencePage />
    ) : (
      ""
    );
  return (
    <div>
      <TopNav />
      <div className="">
        <DisplayPage />
      </div>
      <PageFooter />
    </div>
  );
}

export default DeveloperPage;
