import LeaderOnboardForm from './LeaderOnboardForm';

export const dynamic = 'force-dynamic';

type Search = Promise<{ key?: string }>;

export default async function LeaderOnboardPage({ searchParams }: { searchParams: Search }) {
  const { key } = await searchParams;
  const expected = process.env.LEADER_ONBOARD_SECRET;
  const valid = Boolean(expected) && key === expected;

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-oda-blue to-oda-brown text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4 text-white">Leader Onboarding</h1>
            <p className="text-white/90 text-lg">
              Add your profile to the ODA-USA Leadership page.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {valid ? (
              <>
                <p className="text-gray-700 mb-8">
                  Fill out the form below. Your submission will be reviewed by the board before
                  being published on the Leadership page.
                </p>
                <LeaderOnboardForm onboardKey={key!} />
              </>
            ) : (
              <div className="rounded-xl bg-amber-50 border border-amber-200 p-6 text-amber-900">
                <h2 className="text-xl font-semibold mb-2">Invitation link required</h2>
                <p>
                  This page is only accessible via an invitation link. Please contact the ODA-USA
                  secretary for your personal link.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
