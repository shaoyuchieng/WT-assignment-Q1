document.getElementById("solve").addEventListener("click", function() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    let solution = document.getElementById("solution");

    solution.innerHTML = "";

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        solution.innerHTML = "<p>Please enter valid numbers for a, b, and c.</p>";
        return;
    }

    let discriminant = b * b - 4 * a * c;
    let root1, root2;

    function formatNumber(num) {
        return Number.isInteger(num) ? num : num.toString(); 
    }

    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        solution.innerHTML = `
            <p>The roots are real and different.</p>
            <p>Root 1: ${formatNumber(root1)}</p>
            <p>Root 2: ${formatNumber(root2)}</p>
        `;
    } else if (discriminant === 0) {
        root1 = -b / (2 * a);
        solution.innerHTML = `
            <p>The roots are real and the same.</p>
            <p>Root: ${formatNumber(root1)}</p>
        `;
    } else {
        let realPart = -b / (2 * a);
        let imagPart = Math.sqrt(-discriminant) / (2 * a);
        solution.innerHTML = `
            <p>The roots are complex and different.</p>
            <p>Root 1: ${formatNumber(realPart)} + ${formatNumber(imagPart)}i</p>
            <p>Root 2: ${formatNumber(realPart)} - ${formatNumber(imagPart)}i</p>
        `;
    }
});
