<style>
    .character__info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 0 20px;
    }
	article {
		width: 100%;
		margin: 0;
        display: flex;
        margin: 10px;
        border: 1px solid #999;
	}
</style>

<article class="character">
        <slot name="img">
            <img src='https://i.pinimg.com/originals/41/c1/0b/41c10b15f39111297362852f5ab111a9.jpg' alt='no image'>
        </slot>
        <div class='character__info'>
            <slot name="name">
                <h2>Unknown name</h2>
            </slot>
            <slot name="status">
                <span>Unknown status</span>
            </slot>
            <slot name="species">
                <span>Unknown species</span>
            </slot>
            <slot name="gender">
                <span>Unknown gender</span>
            </slot>
        </div>
</article>