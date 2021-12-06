# Create
npx create-next-app -e with-tailwindcss zeppitomato

# Add NextAuth
 - Follow https://next-auth.js.org/getting-started/example
 - Go to github -> settings -> developer settings -> OAuth Apps
   - Fill in App name, temporary redirect (http://localhost:300), and auth callback
   - Auth callback url (http://localhost:3000/api/auth/callback/github)
   - Access to email? or session.user.name || session.user.email

# Tailwind
https://byrayray.dev/posts/2020-12-27-why-use-tailwind-css-with-nextjs

# Add Prisma DB Querybuilder
 - adjust nextauth to use prisma adapter, change schema
 - npx prisma migrate dev creates db

# Package for docker
https://medium.com/bb-tutorials-and-thoughts/next-js-local-development-with-docker-compose-7b1954292a1f

