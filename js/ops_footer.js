document.write(`
<footer class ="py-4 mt-5 bg-body-tertiary">
<div class="container py-5 px-5 my-5 text-body-secondary">
    <a class="d-inline-flex align-items-center text-decoration-none text-body-secondary mb-2">
        <img class="img-fluid me-2 d-block" style="max-width: 30px;" src="./assets/images/ops_logo_gs_100ppi.png">
        <span class="" style="font-size: 1.2rem;">Open Project Space</span>
    </a>
    <ul class="list-unstyled small">
        <li>
            Website designed by the 2023-2024 Open Project Space Committee
        </li>
        <li>
            CC BY-NC-SA 2023 Institute of Electrical and Electronics Engineers, UC Irvine Branch
        </li>
        <br>
        <li>
        <strong>Fair Use Act Disclaimer</strong>
        <br>
        This site is for educational purposes only.
        <br><br>
        <strong>Fair Use</strong>
        <br>
        Copyright Disclaimer under section 107 of the Copyright Act of 1976, allowance is made for “fair use” for purposes such as criticism, comment, news reporting, teaching, scholarship, education and research.
        Fair use is a use permitted by copyright statute that might otherwise be infringing.
        <br><br>
        <strong>Fair Use Definition</strong>
        <br>
        Fair use is a doctrine in United States copyright law that allows limited use of copyrighted material without requiring permission from the rights holders, such as commentary, criticism, news reporting, research, teaching or scholarship. It provides for the legal, non-licensed citation or incorporation of copyrighted material in another author’s work under a four-factor balancing test.
        </li>
    </ul>

    <ul class="list-unstyled small">
        <li class="fw-bold">
            Have Questions? Contact Us
        </li>
        <li>
            Email | <a href="mailto:ieee@uci.edu">ieee@uci.edu<a>
        </li>
    </ul>

    <ul class="list-unstyled small">
        <li class="fw-bold">
            Reporting a Site Issue? Send an Email
        </li>
        <li>
            Email | <a href="mailto:bbieleck@uci.edu?subject=OPS%20Archive:%20Bug%20Report&body=Hi Ben,%0D%0A%0D%0AI%20noticed%20that _____[something%20isn't%20working%20as%20expected]_____.%20I%20appended%20screenshots%20of%20this%20issue%20to%20this%20email.%0D%0A%0D%0AWould%20you%20be%20able%20to%20fix%20it?%0D%0A%0D%0AThanks,%0D%0A____[your%20name]____">bbieleck@uci.edu<a>
        </li>
        <li>
            Webmaster | Benjamen Bielecki
        </li>
    </ul>
</div>

<script>
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl, {html: true}))

    document.querySelectorAll('.pj-code').forEach(el => {

    hljs.highlightElement(el);
    });
</script>
</footer>

`)
