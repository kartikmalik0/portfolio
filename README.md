
## Clone the Code

Clone the Project from GitHub

```bash
  git clone <repository-url>
  cd <project-folder>
```
    
## Install dependencies
 
Install the dependencies with

```bash
   npm install 
   # or 
   yarn install
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```bash 
DATABASE_URL = postgresql://username:password@localhost:5432/database_name
```
```bash 
NEXT_PUBLIC_SITE_TITLE = Kartik Malik
 ```
```bash 
NEXT_PUBLIC_SITE_DESCRIPTION = Full Stack Developer 
```
```bash 
NEXT_PUBLIC_FAVICON_URL = https://utfs.io/f/f3552155-ac03-458f-8b89-fc28a2873f38-hru0oc.ico 
```

```bash 
NEXT_PUBLIC_THUMBNAIL_IMAGE = https://utfs.io/f/f70ced27-7431-4e10-b720-2d6671207734-82fh7z.jpg 
```



## Generate Prisma 

Run Prisma Generate to your project to make sure your all the types are up to date on the local system.

```bash
    npx prisma generate 
```
## Start Locally

```bash
  npm run dev
  #or
  yarn dev
```