"use client";
import { useRouter } from "next/navigation";

const buttonStyle = {
  measurement:
    "h-36 w-36 mr-2.5 mb-2.5 flex justify-center items-center border-4 ",
};

const Home = () => {
  const router = useRouter();

  const handleClickPiano = () => {
    router.push("/instruments/piano");
  };

  const handleClickVoice = () => {
    router.push("/instruments/voice");
  };

  const handleClickDrums = () => {
    router.push("/instruments/drums");
  };
  return (
    <main className="flex h-screen justify-center bg-stone-900">
      <section className="flex flex-col justify-center">
        <section className="flex">
          <button
            className={`rounded-md border-pink-200  bg-indigo-400  ${buttonStyle.measurement} hover:shadow-xl hover:shadow-pink-500`}
            onClick={handleClickPiano}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15.5 12c-.5-.3-1.2-.9-1.6-1.7c-.5-.7-.9-1.7-1.2-2.5c-.5-1.5-1.1-2.7-1.9-3.6S8.9 2.9 7.3 3c-2 .1-3.1 1-3.7 2S3 7 3 7v13c0 .3.1.5.3.7c0 .2.3.3.6.3h15.9c.3 0 .5-.1.7-.3c.2-.2.4-.4.4-.7c.2-1.1.4-2.9 0-4.5s-1.2-2.9-3.1-3c-.5 0-.9-.1-1.3-.2c-.3-.1-.7-.2-1-.3m-6.2 4.3v2.8h1v-2.8h.8v2.8h1v-2.8h.8v2.8H14v-2.8h1.6v2.8h1v-2.8h.8v2.8h1v-2.8h1.4V20h-16v-3.6h1v2.8h1v-2.8h.8v2.8h1v-2.8"
              />
            </svg>
          </button>

          <button
            className={`rounded-md border-yellow-500 bg-indigo-400 ${buttonStyle.measurement} hover:shadow-xl hover:shadow-yellow-700`}
            onClick={handleClickVoice}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 72 72"
            >
              <path
                fill="#3F3F3F"
                d="M45.304 45.616c2.452 0 3.752.543 5.171 1.406l.015-.024v11.9H21.507v-11.9l-.082-.15c1.38-.762 2.588-1.232 4.87-1.232l.09-.012s.278 11.844 8.917 12.96h.85c8.64-1.116 8.918-12.96 8.918-12.96"
              />
              <path
                fill="#9B9B9A"
                d="m55.244 40.848l2.829-2.828l7.375 7.375l-2.828 2.828z"
              />
              <circle cx="53.622" cy="36.586" r="4" fill="#D0CFCE" />
              <path
                fill="#a57939"
                d="M58.026 42.794c-1.322-.365-1.844-1.876-1.75-3.238c-1.57 1.404-3.975 1.366-5.482-.142a4 4 0 0 1 0-5.657a3.975 3.975 0 0 1 3.015-1.153c-.464-.873-.395-2.341-.778-3.846c0 0-.427-.328-.506-.782a15.837 15.837 0 0 0-.252-1.226c-.568-2.23-1.286-7.798-8.353-12.693c-2.422-1.677-4.865.532-4.865.532l-.31-.229s-3.767-6.169-10.465-.815c-6.698 5.355-7.786 10.463-8.353 12.693c-.568 2.23-.34 4.414-2.157 4.632c-1.818.218-2.728 3.125-1.818 4.51c.91 1.386.683 4.362-1.247 4.894c-1.93.532-2.822 4.29-1.873 5.882c.57 1.125 2.209 2.89 4.957 4.517c1.22-3.038 3.788-5.753 9.073-5.753c3.17 2.104 5.89 3.56 8.938 3.573c3.048-.013 5.767-1.469 8.937-3.573c5.428 0 7.987 2.823 9.167 5.915a89.015 89.015 0 0 0 5.598-2.159c2.864-1.218.454-5.35-1.476-5.882z"
              />
              <path
                fill="#fadcbc"
                d="M24.814 26.039c-.93.096 1.329 2.728 1.329 3.707c0 1.173-1.445 1.463-1.23 2.553c1.22 6.184 5.686 10.77 11.01 10.77c6.262 0 11.338-6.346 11.338-14.174c0-.978-.08-1.934-.23-2.856c0 0-6.737-3.485-8.371-6.804v-.567s-.834 2.22-2.377 2.797l-.764-4.804s-5.754 8.867-10.705 9.378zM44.737 44.92c-3.17 2.104-5.889 3.56-8.937 3.573c-3.048-.013-5.768-1.469-8.938-3.574c-12 0-10 13.996-10 13.996l4.645-.024V46.998l-.082-.15c1.38-.762 2.588-1.232 4.87-1.232l.09-.012s.278 11.844 8.917 12.96h.85c8.64-1.116 8.918-12.96 8.918-12.96l.235.012c2.45 0 3.751.543 5.17 1.406l.015-.024v11.741l4.248-.022s2-13.797-10-13.797z"
              />
              <path d="M41.923 27.067a2 2 0 1 1-4.002-.002a2 2 0 0 1 4.002.002m-8 0a2 2 0 1 1-4.002-.002a2 2 0 0 1 4.002.002m1.999 10.003c-1.151 0-2.303-.287-3.447-.859a1 1 0 1 1 .895-1.789c1.718.86 3.387.86 5.105 0a1 1 0 0 1 .895 1.79c-1.144.571-2.296.857-3.447.857z" />
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M25.008 32.28c1.343 5.956 5.72 10.32 10.915 10.32c4.97 0 9.195-3.998 10.725-9.564m8.089 24.884s2-13-10-13c-3.191 2.127-5.926 3.598-9 3.592h.125c-3.073.006-5.808-1.465-9-3.592c-12 0-10 13-10 13m38.382-17.072l2.829-2.828l7.375 7.375l-2.828 2.828z"
              />
              <circle
                cx="53.622"
                cy="36.586"
                r="4"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="m64.252 46.992l2.846 2.846m-8.245-5.049v14M38.66 14.672s-3.623-6.169-10.065-.815S21.106 24.32 20.56 26.55c-.545 2.23-.326 4.414-2.074 4.632c-1.748.219-2.623 3.125-1.748 4.51c.874 1.386.656 4.362-1.2 4.894c-1.856.532-3.494 3.698-1.42 5.882m24.84-32.079s2.35-2.209 4.68-.532c6.797 4.896 7.488 10.463 8.034 12.693c.101.414.176.827.242 1.226c.076.454.14.89.218 1.29"
              />
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M47.201 33.475c-1.965-1.529-.043-6.925-.043-6.925c-2.228-.483-8.215-8.166-8.215-8.166s-.695 2.207-2.66 3.08l-.764-4.803s-6.25 8.969-11.04 9.889c0 0 3.615 4.305.121 6.052c-3.494 1.747-2.553 4.913-1.024 5.24m21.494 7.066s-.278 11.844-8.918 12.958h-.85c-8.64-1.114-8.918-12.958-8.918-12.958m-4.877 1.393v11.617M50.49 46.301v11.674"
              />
            </svg>
          </button>
        </section>

        <section className="flex">
          <button
            className={`rounded-md border-green-300 bg-indigo-400 ${buttonStyle.measurement} hover:shadow-xl hover:shadow-green-700 `}
            onClick={handleClickDrums}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="m111 58.3l-87.37.4l-.61 8.3L192.4 92.6l1.8-8.1zm310.8 18.8l-.3 29.7l5-.8l4.9.8l-.3-29.7zM96.33 92.8l-1.81 13l-33.17 26.4l1.84 115.6l6.16-40.4l9.55-2.3h.28l-1.03-65l31.95-25.4l2.7-19.4zm330.17 25.9l-66.6 10.4l.6 8.3h132l.6-8.3zm-66 33.3l-.6 8.3l66.6 10.4l66.6-10.4l-.6-8.3zm60.3 30.5l-.2 20.8c2.8.5 5.6 1.2 8.5 1.8l3.3.8l-.2-23.4l-5.7.9zm-287.4 30.7c-16.5-.2-33.5 1.9-51.1 6.1l-2.86 18.8c23.26-3.3 75.96-6.9 127.56 14.6c4-1.6 8.2-3.1 12.4-4.3l1.2-8c-26.6-18.2-55.8-26.8-87.2-27.2zm241.2 0c-31.4.4-60.6 9-87.2 27.2l1.2 8c4.2 1.2 8.4 2.7 12.4 4.3c51.6-21.5 104.3-17.9 127.6-14.6l-2.9-18.8c-17.6-4.2-34.6-6.3-51.1-6.1zm-258.1 39c-17.91 0-32.1 1.8-39.69 3.1l-7.05 46.3l72.94 11.1c10.1-20.3 25.5-37.5 44.5-49.6c-25.4-8.5-50.4-10.9-70.7-10.9zm275 0c-20.3 0-45.3 2.4-70.7 10.9c19 12.1 34.4 29.3 44.5 49.6l72.9-11.1l-7-46.3c-7.6-1.3-21.8-3.1-39.7-3.1zm-137.5 10c-49.9 0-90.4 40.5-90.4 90.4c0 49.9 40.5 90.4 90.4 90.4c49.9 0 90.4-40.5 90.4-90.4c0-49.9-40.5-90.4-90.4-90.4zM64.27 315.5l1.36 85.5l-46.73 87h18.94l33.24-62l15.19 62h17.23l-21.19-86l-1.33-84zM433.6 317l-14.2 2.2l-.8 74.1l-24.2 55.7l7.4 25l24.7-57l30.9 71h18.2l-41.2-94.7zm-279.7 11.6c-4.7 12.1-7.2 25.2-7.2 38.9C146.7 427 194.8 475 254 475c59.2 0 107.3-48 107.3-107.5c0-13.7-2.5-26.8-7.2-38.9c1.8 7.7 2.8 15.8 2.8 24C356.9 409 310.8 456 254 456c-56.8 0-102.9-47-102.9-103.4c0-8.2 1-16.3 2.8-24zm-18 77.4l-20.2 82h25.7l11.8-48c-7.4-11-13.3-22-17.3-34zm236.2 0c-4 12-9.9 23-17.3 34l11.8 48h25.7z"
              />
            </svg>
          </button>

          <button
            className={`rounded-md border-cyan-400 bg-indigo-400 ${buttonStyle.measurement} hover:shadow-xl hover:shadow-cyan-700`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 56 56"
            >
              <path
                fill="currentColor"
                d="M12.35 15.985c0-1.363.234-2.193.362-3.173l.788-5.77c.063-.554.106-.852.106-1.043c0-.32-.213-.575-.596-.575c-.32 0-.596.32-1.043.851l-4.791 5.941v.34c2.172.98 2.704 1.385 2.704 3.429l-.277 13.478C5.898 35.936 0 48.82 0 52.033c0 1.491 1 2.386 2.13 2.386c1.043 0 1.66-.64 2.533-1.576c.81-.873 3.13-3.152 4.237-4.237c.49-.511 1.257-1.3 2.087-1.3c.83 0 1.576.789 2.087 1.3c1.086 1.085 3.428 3.364 4.237 4.237c.83.937 1.47 1.575 2.534 1.575c1.128 0 2.108-.894 2.108-2.384c0-3.173-5.792-15.842-9.433-22.294Zm27.66 27.297c.936-1.426 1.894-2.853 1.894-5.387c0-2.235-.575-3.705-.575-4.77c0-1.021 1.363-1.916 4.62-1.916c3.259 0 4.621.895 4.621 1.917c0 1.064-.574 2.534-.574 4.77c0 4.748 3.491 5.706 3.491 9.794c0 2.832-3.108 4.195-7.537 4.195c-2.236 0-4.089-.298-5.579-1.107a9.892 9.892 0 0 1-1.277 2.193c2 1.086 4.364 1.405 6.856 1.405c5.238 0 10.05-1.618 10.05-6.899c0-5.323-3.47-5.92-3.47-9.411c0-2.215.702-3.96.702-5.494c0-1.959-2.215-3.385-5.834-3.641l-.235-13.116c-.02-1.3 1.832-1.895 1.768-2.62c-.277-3.449-.511-5.11-.618-5.897c-.128-.852-.873-1.235-2.363-1.235s-2.236.383-2.364 1.235c-.106.787-.34 2.448-.617 5.898c-.043.724 1.788 1.32 1.767 2.619l-.234 13.116c-3.641.277-5.834 1.682-5.834 3.641c0 1.533.724 3.28.724 5.494c0 1.043-.341 1.873-.788 2.576a11.26 11.26 0 0 1 1.405 2.64M21.803 44.71c1.065-1.959 3.066-3.833 3.066-6.92c0-3.364-1.66-4.834-1.66-5.366l.233-.085c.575.724 1.47 1.874 2.832 1.874c1.129 0 1.917-.597 2.364-1.725c.447 1.128 1.213 1.725 2.363 1.725c1.363 0 2.257-1.15 2.832-1.874l.213.085c0 .532-1.64 2.002-1.64 5.366c0 4.407 3.748 5.813 3.748 9.688c0 2.81-3.087 4.408-7.516 4.408c-1.831 0-3.386-.277-4.6-.746c.022.767-.085 2.023-.298 2.577c1.576.49 3.216.66 4.898.66c5.238 0 10.05-1.852 10.05-6.899c0-5.11-3.748-6.324-3.748-9.944c0-3.002 2.023-4.876 2.023-6.451c0-1.044-.98-2.044-2.108-2.044c-.851 0-1.32.66-1.64 1.085c-.617.81-.872 1.512-2.107 1.512c-.575 0-.83-.149-.98-.426l-.234-15.394c0-1.576.511-1.832.81-2.002c.233-.17.425-.34.425-.724c0-3.492.98-4.322.98-5.238c0-.34-.32-.426-.703-.681c-.618-.447-1.767-1.107-2.747-1.107s-2.13.66-2.747 1.107c-.362.255-.702.34-.702.681c0 .916.98 1.746.98 5.238c0 .383.19.554.446.724c.277.17.81.405.81 2.002l-.277 15.352c-.128.298-.384.468-1.001.468c-1.235 0-1.49-.702-2.108-1.49c-.32-.447-.81-1.107-1.64-1.107c-1.128 0-2.108 1-2.108 2.044c0 1.575 2.023 3.449 2.023 6.451c0 1.725-.937 3.003-1.767 4.238c.447.98.873 1.959 1.235 2.938m-10.817.085c-1.256 0-2.32.895-3.47 1.938c-1.32 1.17-2.918 2.832-4.685 4.919c-.085.106-.277.085-.256-.128c.533-3.492 4.898-13.053 8.411-19.377c3.513 6.303 7.878 15.863 8.41 19.377c.022.17-.19.234-.297.085c-1.725-2.044-3.343-3.705-4.664-4.876c-1.128-1.044-2.193-1.938-3.449-1.938m34.963-4.876a2.272 2.272 0 0 0 2.257-2.257a2.272 2.272 0 0 0-2.257-2.257a2.272 2.272 0 0 0-2.257 2.257a2.272 2.272 0 0 0 2.257 2.257"
              />
            </svg>
          </button>
        </section>
      </section>
    </main>
  );
};

export default Home;
