import React, { useState } from "react";
import { Drawer, Menu, Button } from "antd";
import { JsonForms } from "@jsonforms/react";
import { materialRenderers } from "@jsonforms/material-renderers";
import { MenuOutlined, VerticalRightOutlined } from "@ant-design/icons";
import "./App.css";
import { schemas, menu } from "./Schemas";

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    personal: false,
    professional: false,
  });

  const [selectedSchema, setSelectedSchema] = useState<any>(
    schemas["base"].schema
  );
  const [selectedUiSchema, setSelectedUiSchema] = useState(
    schemas["base"].uischema
  );
  {
    /*This things seems weird but it's simple, it's a function who take in parameter or "personal" or "professional",
    keep previous state (...prev -> ex: expandedSections = { personal: false, professional: false})
    and set the sections selected = of it opposite (!prev[section])*/
  }
  const toggleSection = (section: "personal" | "professional") => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };
  const handleMenuClick = (key: keyof typeof schemas) => {
    if (!schemas[key]) {
      console.error("Clé de schéma invalide :", key);
      return;
    }
    setSelectedSchema(schemas[key].schema);
    setSelectedUiSchema(schemas[key].uischema);
    setVisible(false);
  };
  const getSchemaKey = (schemaObject: any): keyof typeof schemas | null => {
    return (
      (Object.entries(schemas).find(
        ([key, value]) => value === schemaObject
      )?.[0] as keyof typeof schemas) || null
    );
  };

  return (
    <div className="app">
      <header className="header">
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setVisible(true)}
          className="menu-button"
        />
        <h1 className="title">Cyberun Candidature</h1>
      </header>

      <Drawer
        title="Menu"
        placement="left"
        closable={false}
        open={visible}
        className="drawer"
      >
        {/* Iterate through the menu schema (Schema.ts), to do a dynamical Drawer. 
        If we need to add more category, it's possible to do it without has knowledge in developpement, just need to append the menu schema*/}
        {Object.entries(menu).map(([categoryKey, category]) => (
          <Menu mode="vertical" theme="dark" key={categoryKey}>
            <Menu.Item
              onClick={() =>
                toggleSection(
                  categoryKey === "PersoInfo" ? "personal" : "professional"
                )
              }
              className="category"
            >
              <strong>{category.Title}</strong>
            </Menu.Item>
            {expandedSections[
              categoryKey === "PersoInfo" ? "personal" : "professional"
            ] && (
              <>
                {/* this time iterate through subcategory of the menu (Schema.ts). 
                If we need to add more subcategory, it's possible like the menu, don't need knowledge just need to append the subcategory(schema) schema*/}
                {Object.entries(category.subtitle).map(
                  ([subKey, subItem]: [string, any]) => {
                    const schemaKey = getSchemaKey(subItem.Link);
                    return (
                      <Menu.Item
                        key={subKey}
                        onClick={() => schemaKey && handleMenuClick(schemaKey)}
                      >
                        {subItem.name}
                      </Menu.Item>
                    );
                  }
                )}
              </>
            )}
          </Menu>
        ))}
        <Button className="close-button" onClick={() => setVisible(false)}>
          <VerticalRightOutlined />
        </Button>
      </Drawer>

      <main className="form-container">
        <JsonForms
          schema={selectedSchema}
          uischema={selectedUiSchema}
          data={{}}
          renderers={materialRenderers}
        />
      </main>
    </div>
  );
};

export default App;
