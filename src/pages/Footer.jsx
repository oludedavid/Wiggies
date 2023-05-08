export default function Footer() {
  return (
    <footer class="bg-gray-900 text-white py-10">
      <div class="container flex flex-wrap justify-between items-center">
        <div class="w-full md:w-auto text-center md:text-left mb-5 md:mb-0">
          <h3 class="text-lg font-bold">Company Name</h3>
          <p class="text-sm">123 Main Street, Anytown USA 12345</p>
        </div>
        <nav class="w-full md:w-auto text-center">
          <ul class="list-none">
            <li class="inline-block mr-4">
              <a href="#" class="hover:text-gray-300">
                Home
              </a>
            </li>
            <li class="inline-block mr-4">
              <a href="#" class="hover:text-gray-300">
                About
              </a>
            </li>
            <li class="inline-block mr-4">
              <a href="#" class="hover:text-gray-300">
                Services
              </a>
            </li>
            <li class="inline-block mr-4">
              <a href="#" class="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div class="w-full md:w-auto text-center md:text-right">
          <p class="text-sm">Connect with us:</p>
          <div class="flex justify-center md:justify-end mt-2">
            <a href="#" class="text-gray-400 hover:text-white mr-4">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white mr-4">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white mr-4">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
