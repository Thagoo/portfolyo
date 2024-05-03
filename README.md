# Portfolyo

Portfolyo is a dynamic portfolio site builder where users can fill their data in JSON format and Portfolyo will render their data into a beautiful portfolio website. It's built using Next.js, Tailwind CSS, and CSS for styling. The project also implements Server-Side Rendering (SSR) and Search Engine Optimization (SEO) to ensure optimal performance and visibility.

![Portfolyo Screenshot](https://github.com/Thagoo/portfolyo/assets/47388359/4246d6dd-08da-4853-8897-37f1f56628c5)

## Guidelines

If you want to use this template you need two ENV variables.

```
JSON_URL= URL
FORMSPREE_URL = URL
```

JSON_URL

    1. Copy and Edit [this](https://github.com/Thagoo/portfolyo/blob/master/.template/template.json) sample JSON file.
    2. Go to https://www.npoint.io/docs and Create JSON Bin then paste the edited content
    3. Save and copy the URL generated in bottom

    Note: You can directly edit on npoint, also whenever you want to update your data you can update there

FORMSPREE_URL

    1. Create form in https://formspree.io

Click on deploy button then paste the URLs in respective ENV vars then deploy the project.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&env=JSON_URL,FORMSPREE_URL&envDescription=JSON_URL%20%3D%20Go%20to%20https%3A%2F%2Fwww.npoint.io%2Fdocs%20create%20new%20bin%2C%20paste%20edited%20json%20data%2C%20save%20and%20copy%20the%20bin%20URL%20%7C%7C%20FORMSPREE_URL%20%3D%20Go%20to%20https%3A%2F%2Fformspree.io%20and%20get%20formspree%20URL%20to%20recieve%20messages%20from%20contact.&project-name=portfolyo&repository-name=portfolyo)

## Features

- Dynamic portfolio site generation based on user-provided JSON data.
- Next.js for server-side rendering and optimized performance.
- Tailwind CSS for fast and responsive styling.
- Custom CSS for additional styling and design enhancements.
- SEO implementation for improved search engine visibility.
- Beautifully designed templates for showcasing user portfolios.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/thagoo/portfolyo.git

   ```

2. Navigate into the project directory:

   ```
   cd portfolyo
   ```

3. Install dependencies:

   ```
   npm install
   npm run dev
   ```

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for bug fixes, improvements, or new features.

    1. Fork the repository.
    2. Create a new branch: git checkout -b feature/your-feature.
    3. Make your changes and commit them: git commit -m 'Add some feature'.
    4. Push to the branch: git push origin feature/your-feature.
    5. Submit a pull request.

## License

This project is licensed under the MIT License.
