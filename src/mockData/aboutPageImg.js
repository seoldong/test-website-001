function aboutPageImages() {
    const modules = import.meta.glob('../assets/page/about/ingredients/*.{png,jpg,jpeg}', {
        eager: true
    });

    const ingredientsImages = Object.keys(modules).map(path => {
        const fileName = path.split('/').pop();

        return {
            name: fileName.split('.')[0],
            src: modules[path].default
        };
    });
    return ingredientsImages;
}

export default aboutPageImages;