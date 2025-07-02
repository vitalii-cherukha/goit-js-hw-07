// 1
const items = document.querySelectorAll('.item');
let totalCategories = 0;

for (const item of items) {
  totalCategories += 1;
}

console.log(`Number of categories: ${totalCategories}`);

// 2
items.forEach(item => {
  const listTitle = item.querySelector('h2').textContent;
  const listItems = item.querySelectorAll('ul li').length;
  console.log(`Category: ${listTitle}`);
  console.log(`Elements: ${listItems}`);
});
