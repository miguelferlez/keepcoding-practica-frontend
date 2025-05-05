import { getProducts } from "../show-products/showProductsModel.js";
import { getPages } from "./paginationModel.js";
import { pageElement } from "./paginationView.js";

export async function showPages(container, currentPage) {
    try {
        const products = await getProducts();
        const pageLinks = await getPages(currentPage);
        const totalProducts = products.length;
        const productsPerPage = 8;
        const totalPages = Math.ceil(totalProducts / productsPerPage);

        const links = updatePaginationLinks(pageLinks);
        console.log(links);

        //TODO prev and next buttons functions
        // const previousBtn = document.querySelector("#prev");
        // previousBtn.addEventListener("click", () => {
            
        // });
        // const nextBtn = document.querySelector("#next");
        // nextBtn.addEventListener("click", () => {
            
        // });

        if (totalProducts) {
            for(let i = 1; i <= totalPages; i++) {
                const pageItem = document.createElement("li");
                pageItem.innerHTML = pageElement(i, productsPerPage);
                container.appendChild(pageItem);

            }
        }


    } catch (error) {
        
    }
}

function updatePaginationLinks(linkHeader) {
    const links = {};

    if (linkHeader) {
        linkHeader.split(',').forEach(link => {
            const [url, rel] = link.split(';').map(s => s.trim());
            const cleanUrl = url.replace(/<|>/g, '');
            const key = rel.replace('rel="', '').replace('"', '');
            links[key] = cleanUrl;
        });
    }

    return links;
}