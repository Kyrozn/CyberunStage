# Cyberun Stage - Challenge Candidature avec JSONForms et Ant Design

Ce projet est une application React utilisant **JSONForms**, **Ant Design** et **TypeScript** pour générer dynamiquement des formulaires en fonction de schémas JSON.

L'interface comprend un **drawer** (menu latéral) qui permet de naviguer entre différentes catégories de formulaires. Lorsqu'un élément est sélectionné, le formulaire correspondant s'affiche à droite.

En Parcourant les 2 branches de ce repo vous aurez accès au code source de l'app sur la branche [Main](https://github.com/Kyrozn/CyberunStage/tree/main)

La version Build quand a elle est sur la branche [Build](https://github.com/Kyrozn/CyberunStage/tree/Build)

## 🛠 Technologies utilisées

- **React** avec **TypeScript**  
- **JSONForms** pour la génération dynamique des formulaires  
- **Ant Design** pour les composants UI  
- **Material Renderers** pour le rendu JSONForms  
- **React Hooks** (`useState`) pour gérer l'état de l'interface  

## 💁 Structure du projet

```
/src
 ├── App.tsx        # Composant principal avec la gestion du drawer et des formulaires
 ├── Schemas.ts     # Définition des schémas JSON pour les formulaires
 ├── App.css        # Styles CSS pour l'application
 ├── index.tsx      # Point d'entrée de l'application
 ├── ... (autres fichiers)
```

## 🌟 Fonctionnalités

- 📂 **Menu latéral (Drawer)** : Permet de basculer entre différentes catégories de formulaires.
- 📄 **Génération dynamique des formulaires** : Les formulaires sont créés à partir de schémas JSON.
- 🎨 **Personnalisation avec Ant Design** : Interface moderne et responsive.
- 🔄 **Gestion des catégories** : Deux groupes de formulaires sont affichés sous différents titres.

## 🏢 Déploiement avec GitHub Pages

L'application est configurée pour être déployée sur **GitHub Pages**. Ducoup, la démonstration du site est accessible via le lien suivant :
**https://kyrozn.github.io/CyberunStage/**

## 🚀 Installation et lancement

### 1️⃣ Cloner le projet  
```bash
git clone https://github.com/Kyrozn/CyberunStage.git
cd CyberunStage
```

### 2️⃣ Installer les dépendances  
```bash
npm install
```

### 3️⃣ Lancer l'application  
```bash
npm start
```

L'application sera accessible sur **http://localhost:3000**.

## 🛠 Schémas JSON et UI

Les schémas des formulaires sont définis dans `Schemas.ts`. Ils contiennent :

- **Deux catégories principales**
  - Catégorie 1 : **Informations Personnelles** (3 sous-catégories)
  - Catégorie 2 : **Informations Professionnelles** (2 sous-catégories)

Chaque sous-catégorie affiche un formulaire correspondant au schéma JSON.

## 📝 Références

- [JSONForms](https://jsonforms.io/)
- [Ant Design](https://ant.design/)
- [Pro Layout](https://procomponents.ant.design/components/layout)
