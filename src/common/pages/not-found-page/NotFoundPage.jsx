import notFoundPageStyles from './not-found-page.module.css';

export const NotFoundPage = () => {
  return (
    <div className={notFoundPageStyles.container}>
        <div className={notFoundPageStyles.error}>404</div>
        <h2 className={notFoundPageStyles.message}>Page not found</h2>
    </div>
  )
}
