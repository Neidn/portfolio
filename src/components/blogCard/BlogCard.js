import styles from "./BlogCard.module.css";

const BlogCard = ({ blog }) => (
  <div>
    <div className={styles['container']}>
      <div className={styles['square']}>
        <img src={blog.image} alt="blog" className={`${styles['blog-card-image']} mask`} />
        <div className={styles['blog-card-title']}>{blog.title}</div>
        <p className={styles['blog-card-subtitle']}>{blog.description}</p>
        <div>
          <a href={blog.url} target="_" className={styles['button']}>
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default BlogCard;
