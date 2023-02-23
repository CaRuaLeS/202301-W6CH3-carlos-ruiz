/* eslint-disable jsx-a11y/anchor-is-valid */
export function Action({ type }: any) {
  return (
    <>
      <a href="#" className={type}>
        {type}
      </a>
      <a href="#" className="hang active">
        Hang
      </a>
    </>
  );
}
