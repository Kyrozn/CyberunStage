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
        {Object.entries(menu).map(([categoryKey, category]) => (
          <Menu mode="vertical" theme="dark" key={categoryKey}>
            <Menu.Item
              onClick={() => (
                toggleSection(
                  categoryKey === "PersoInfo" ? "personal" : "professional"
                )
              )}
              className="category"
            >
              <strong>{category.Title}</strong>
            </Menu.Item>
            {expandedSections[
              categoryKey === "PersoInfo" ? "personal" : "professional"
            ] && (
              <>
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
