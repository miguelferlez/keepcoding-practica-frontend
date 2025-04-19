export const authorizedHeading = (user) => {
    const heading = `Welcome back! 👋`;

    return heading;
};

export const authorizedHeadingWithName = (user) => {
    const heading = `Welcome back, ${user.nickname}! 👋`;

    return heading;
};

export const unauthorizedHeading = () => {
    const heading = `Buy and sell second-hand goods`;

    return heading;
};